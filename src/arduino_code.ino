#include <SoftwareSerial.h>
int pin = A3;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  //pinMode(pin, INPUT);
}

void loop() {
  int variable = analogRead(pin);
  Serial.write(variable);
  Serial.print(variable);
  delay(100);
  
}
