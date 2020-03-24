#include <Keyboard.h> // https://www.arduino.cc/reference/en/language/functions/usb/keyboard/

#define outputA 3
#define outputB 4
#define switchOut 11
#define shooting A5
 
 int counter = 0; 
 int aState;
 int aLastState; 

//boolean isButton1Pressed = false;
const char button1Char = '1';
const char switchButton = '2';
const char shootingChar = '3';

 void setup() { 
   pinMode (outputA,INPUT);
   pinMode (outputB,INPUT);
   pinMode (switchOut, INPUT);
   
   Serial.begin (9600);
   // Reads the initial state of the outputA
   aLastState = digitalRead(outputA);  

      // Activate mouse and keyboard
  Keyboard.begin();
}

 void loop() { 

//  int button1Val = digitalRead(outputA);
//  int button2Val = digitalRead(BUTTON_2_PIN);
  int numButtonsPressed = 0;

  
   aState = digitalRead(outputA); // Reads the "current" state of the outputA
   // If the previous and the current state of the outputA are different, that means a Pulse has occured
   if (aState != aLastState){     
     // If the outputB state is different to the outputA state, that means the encoder is rotating clockwise
     if (digitalRead(outputB) != aState) { 
       counter ++;
     } else {
       counter --;
     }
     //Serial.print("Position: ");
     //Serial.println(counter);
   } 
   aLastState = aState; // Updates the previous state of the outputA with the current state

   if(counter >= 40){
    counter = counter - 40;
    Keyboard.press(button1Char);
    Keyboard.release(button1Char);
    //Serial.print("'");
    //Serial.print(button1Char);
    //Serial.print("': Pressed\t");
//    numButtonsPressed++;
    
   }
   
   if(counter <= -40){
    counter = counter + 40;
    Keyboard.press(button1Char);
    delay(100);
    Keyboard.release(button1Char);
    //Serial.print("'");
    //Serial.print(button1Char);
    //Serial.print("': Pressed\t");
//    numButtonsPressed++;
   }

   if(numButtonsPressed > 0){
    //Serial.println();
  }

  if (digitalRead(switchOut) == HIGH) {
    Keyboard.press(switchButton);
    delay(100);
    Keyboard.release(switchButton);
  }

  if (analogRead(shooting) < 400) {
    Keyboard.press(shootingChar);
    delay(100);
    Keyboard.release(shootingChar);
  }

/** HANDLE BUTTON INPUT AS KEYBOARD **/


  //  - https://www.arduino.cc/en/Reference/KeyboardModifiers
//  if(button1Val == LOW){
//    isButton1Pressed = true;
//    Keyboard.press(button1Char);
//    Serial.print("'");
//    Serial.print(button1Char);
//    Serial.print("': Pressed\t");
//    numButtonsPressed++;
//  }else if(isButton1Pressed == true && button1Val == HIGH){
//    Keyboard.release(button1Char);
//    isButton1Pressed = false;
//  }
  


}
