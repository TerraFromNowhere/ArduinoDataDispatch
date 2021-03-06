#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h> 
#include <Ethernet.h>
#include <iarduino_OLED_txt.h>  
#include <DS3231.h>
#include <Thread.h>
#include <SD.h>
#include <ArduinoJson.h>
#include <ArduinoHttpClient.h>

EthernetClient ethernet;

HttpClient client = HttpClient(ethernet,"192.168.0.2", 9000);

 
const int chipSelect = 47;
RF24 radio(31, 33); // CE, CSN
byte mac[] = {0xAC,0xBE,0xBC,0xF1,0xDE,0xA3};   // Enter a MAC address and IP address for your controller below.
IPAddress ip(192, 168, 0, 3);   // The IP address will be depend on your local network                           
iarduino_OLED_txt myOLED(0x3C);  // Объявляем объект myOLED, указывая адрес дисплея на шине I2C: 0x3C или 0x3D.
extern uint8_t MediumFontRus[];  // Подключаем шрифт MediumFontRus.
DS3231  rtc(SDA, SCL);           // Init the DS3231 using the hardware interface

//only unsigned long could be passed into delay counter, if you will to handle numbers above 64k
unsigned long del = 30000;

uint8_t  pipe = 0;
uint64_t  pipe01 = 0xAABBCCDD22LL ;
uint64_t  pipe02 = 0xAABBCCDD11LL ;
uint64_t  pipe03 = 0xAABBCCDD33LL ;
uint64_t  pipe04 = 0xAABBCCDD44LL ;
uint64_t  pipe05 = 0xAABBCCDD55LL ;
uint64_t  pipe06 = 0xAABBCCDD66LL ;  

EthernetServer server(8080);

Thread radioThread = Thread();
Thread ethernetThread = Thread();


void setup(){
 
  Serial.begin(9600);
  rtc.begin();
  myOLED.begin();   
  myOLED.setFont(MediumFontRus); 
  Serial.println("Privet");
  const int second = 1000*10; 
  delay(2000);

  Ethernet.init(10);
  Ethernet.begin(mac);

  radioThread.onRun(radioSetup);
  radioThread.setInterval(second); //initiate data sending protocol once per unit of time

  ethernetThread.onRun(ethernetSetup);
  ethernetThread.setInterval(1000);

  
  radioInitialise();
  ethernetInitialise();
  sdInitialise();
  

 
  //  radio.stopListening(); // останавливает приём (нужно перед началом передачи) 
}

void loop(){   

  if(radioThread.shouldRun()){
      radioThread.run();
   }

   if(ethernetThread.shouldRun()){
    ethernetThread.run();
   }


}



void radioInitialise(){
  radio.begin(); 
  radio.setChannel(9); // канал (0-127)
  radio.setDataRate(RF24_1MBPS);     // скорость, RF24_250KBPS, RF24_1MBPS или RF24_2MBPS  // RF24_250KBPS на nRF24L01 (без +) неработает.// меньше скорость, выше чувствительность приемника.
  radio.setPALevel(RF24_PA_HIGH);   // мощьность передатчика RF24_PA_MIN=-18dBm, RF24_PA_LOW=-12dBm, RF24_PA_MED=-6dBM,
  radio.openReadingPipe (1,pipe01); 
  radio.openReadingPipe (2,pipe02);  
  radio.openReadingPipe (3,pipe03);
  radio.openReadingPipe (4,pipe04);
  radio.openReadingPipe (5,pipe05);
  radio.openReadingPipe (6,pipe06);
  radio.startListening(); 
}


void ethernetInitialise(){
    //ethernet server init

   Ethernet.init(10);  // You can use Ethernet.init(pin) to configure the CS pin
   Ethernet.begin(mac, ip);   // start the Ethernet connection and the server:
 
  // Check for Ethernet hardware present
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
     while (true) {
     delay(1); // do nothing, no point running without Ethernet hardware
   }
  }
  if (Ethernet.linkStatus() == LinkOFF) {
    Serial.println("Ethernet cable is not connected.");
 }
//  start server
  server.begin();
  Serial.print("server has been started at"+Serial.println(Ethernet.localIP()));
  
  //end of ethernet init 
 }

 void sdInitialise(){
  // Open serial communications and wait for port to open:

  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not presented");
    // don't do anything more:
    while (1);
  }
  Serial.println("card initialized.");
   
  }

float HTTPSerialize(float *data){
  
 
 
 Serial.println("making POST request with delay");
 Serial.println(del);
 Serial.println("ms");
 
 delay(del);
 String postData = "Temperature="+String(data[0])+"&Humidity="+String(data[1])+"&Voltage="+String(data[2]/1000)+"&Sensor_ID="+String(data[3]); 

  client.beginRequest();
  client.post("/");
  client.sendHeader("Content-Type", "application/x-www-form-urlencoded");
  client.sendHeader("Content-Length", postData.length());
  client.sendHeader("X-Custom-Header", "custom-header-value");
  client.beginBody();
  client.print(postData);
  client.endRequest();

  // read the status code and body of the response
  int statusCode = client.responseStatusCode();
  String response = client.responseBody();

  Serial.print("Status code: ");
  Serial.println(statusCode);
  Serial.print("Response: ");
  Serial.println(response);

     
                        
  Serial.println("Data serialized succesfullly!");

    
                 
}
  

 //sd card logger
float sdcardSerialize(float *data){
  
    File dataFile = SD.open("datalog.txt", FILE_WRITE);

       if (dataFile) {
      dataFile.print("{ Sensor 1 data : \r\n");     
      dataFile.print("Humidity (%): ");
      dataFile.println(data[1]);
      dataFile.print("Temperature in C: ");
      dataFile.print(data[0]);
      dataFile.print("Voltage = \r\n");
      dataFile.println(data[2]/1000);  
      dataFile.println("\r\n }");
      dataFile.close();
      // print to the serial port too:
      Serial.println("Sensor data logged successfully");     
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening datalog.txt");
  }
  }


void radioSetup(){

  Serial.println("Radio thread running");
  
     float data[4];
     
     int prevData = 0;
     
  if (radio.available(&pipe)){ 

      Serial.println("Some data avail.");

    
  if(pipe==1)  {

        if(prevData != 1){
          
          prevData = 1;
          radio.read(&data, sizeof(data)); 
          
        } 

       Serial.println("Prev. data take off from");
       Serial.println(prevData);
    
         data[3] = 1;
  
        Serial.print("Temp :");
        Serial.println(data[0]);
        Serial.print("Humidity(%): ");
        Serial.print(data[1]);
        Serial.print("Vol: ");
        Serial.println(data[2]/1000);
        Serial.println();
        myOLED.clrScr();
        myOLED.print(F("Temp:"), 1,   1);
        myOLED.print((data[0]), 65,     1);
        myOLED.print(F("Hum."), 1,     4);
        myOLED.print((data[1]), 65,     4);
        myOLED.print(F("Volt."), 1,     7);
        myOLED.print((data[2]/1000), 65,     7);
       
        Serial.print(pipe);      
        sdcardSerialize(data);
        
        HTTPSerialize(data);

  }  
    
  if(pipe==2)  {

      if(prevData != 2){
        
         prevData = 2;
         radio.read(&data, sizeof(data));
          
       }

       Serial.println("Prev. data take off from");
       Serial.println(prevData);
     
      data[3] = 2;
    
      Serial.print("Temp :");
      Serial.println(data[0]);
      Serial.print("Humidity(%): ");
      Serial.print(data[1]);
      Serial.print("Vol: ");
      Serial.println(data[2]/1000);
      Serial.println();
      myOLED.clrScr();
      myOLED.print(F("Temp:"), 1,   1);
      myOLED.print((data[0]), 65,     1);
      myOLED.print(F("Hum."), 1,     4);
      myOLED.print((data[1]), 65,     4);
      myOLED.print(F("Volt."), 1,     7);
      myOLED.print((data[2]/1000), 65,     7);
     
      Serial.print(pipe);
      
      sdcardSerialize(data);
      HTTPSerialize(data);

  }
  if(pipe==3)  {

        if(prevData != 3){
          
          prevData = 3;
          radio.read(&data, sizeof(data)); 
          
        }

       Serial.println("Prev. data take off from");
       Serial.println(prevData);

        data[3] = 3;
        
        Serial.print("Temp :");
        Serial.println(data[0]);
        Serial.print("Humidity(%): ");
        Serial.print(data[1]);
        Serial.print("Vol: ");
        Serial.println(data[2]/1000);
        Serial.println();
        myOLED.clrScr();
        myOLED.print(F("Temp:"), 1,   1);
        myOLED.print((data[0]), 65,     1);
        myOLED.print(F("Hum."), 1,     4);
        myOLED.print((data[1]), 65,     4);
        myOLED.print(F("Volt."), 1,     7);
        myOLED.print((data[2]/1000), 65,     7);
     
      Serial.print(pipe);
   
      sdcardSerialize(data);
      HTTPSerialize(data);
        
    }

        if(pipe==4)  {

        if(prevData != 4){
          
          prevData = 4;
          radio.read(&data, sizeof(data)); 
          
        }

       Serial.println("Prev. data take off from");
       Serial.println(prevData);

        data[3] = 4;
        
        Serial.print("Temp :");
        Serial.println(data[0]);
        Serial.print("Humidity(%): ");
        Serial.print(data[1]);
        Serial.print("Vol: ");
        Serial.println(data[2]/1000);
        Serial.println();
        
        myOLED.clrScr();
        myOLED.print(F("Temp:"), 1,   1);
        myOLED.print((data[0]), 65,     1);
        myOLED.print(F("Hum."), 1,     4);
        myOLED.print((data[1]), 65,     4);
        myOLED.print(F("Volt."), 1,     7);
        myOLED.print((data[2]/1000), 65,     7);
     
        Serial.print(pipe);
   
        sdcardSerialize(data);
        HTTPSerialize(data);
        
    }

      if(pipe==5)  {

        if(prevData != 5){
          
          prevData = 5;
          radio.read(&data, sizeof(data)); 
          
        }

       Serial.println("Prev. data take off from");
       Serial.println(prevData);

        data[3] = 5;
        
        Serial.print("Temp :");
        Serial.println(data[0]);
        Serial.print("Humidity(%): ");
        Serial.print(data[1]);
        Serial.print("Vol: ");
        Serial.println(data[2]/1000);
        Serial.println();
        myOLED.clrScr();
        myOLED.print(F("Temp:"), 1,   1);
        myOLED.print((data[0]), 65,     1);
        myOLED.print(F("Hum."), 1,     4);
        myOLED.print((data[1]), 65,     4);
        myOLED.print(F("Volt."), 1,     7);
        myOLED.print((data[2]/1000), 65,     7);
     
      Serial.print(pipe);
   
      sdcardSerialize(data);
      HTTPSerialize(data);
        
    }

   if(pipe==6)  {

        if(prevData != 6){
          
          prevData = 6;
          radio.read(&data, sizeof(data)); 
          
        }

       Serial.println("Prev. data take off from");
       Serial.println(prevData);

        data[3] = 6;
        
        Serial.print("Temp :");
        Serial.println(data[0]);
        Serial.print("Humidity(%): ");
        Serial.print(data[1]);
        Serial.print("Vol: ");
        Serial.println(data[2]/1000);
        Serial.println();
        myOLED.clrScr();
        myOLED.print(F("Temp:"), 1,   1);
        myOLED.print((data[0]), 65,     1);
        myOLED.print(F("Hum."), 1,     4);
        myOLED.print((data[1]), 65,     4);
        myOLED.print(F("Volt."), 1,     7);
        myOLED.print((data[2]/1000), 65,     7);
     
      Serial.print(pipe);
   
      sdcardSerialize(data);
      HTTPSerialize(data);
        
    }  
  }

   Serial.println("No data avail");
 }

 void ethernetSetup(){
   //web server & http request handling
    float data[3];
    radio.read(&data, sizeof(data));
    EthernetClient client = server.available();
    if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
     boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {      // send a standard http response header
          
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // the connection will be closed after completion of the response
          client.println("Refresh: 30");  // refresh the page automatically every 5 sec
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");
          
          Serial.print(pipe);
          Serial.print("Humidity (%): ");
          Serial.println(data[1]);
          Serial.print("Temperature : ");
          Serial.print(data[0]);
          Serial.print(" in C ");
          Serial.print("Voltage : ");
          Serial.println(data[2]/1000);  
          Serial.println();  
          
          client.print(pipe);
          client.print("<h1>Data provided by embedded arduino server!</h1>");   
          client.print("<div>Humidity : ");
          client.print(data[1]);
          client.print("% </div>");
          client.println("<br/>");
          client.print("<div>Temperature : ");
          client.print(data[0]);
          client.print(" C</div>");
          client.println("<br/>");
          client.print("<div>Volt. : ");
          client.print(data[2]/1000);
          client.print("</div>");  
          client.println("<br/>");             
          client.println("</html>");       
            break;
         }
       if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }   
       } }}
     
      delay(1);
    // close the connection:
      client.stop();
  
  }








 