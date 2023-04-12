//Pines conectados a la placa
#define PIR_PIN D7
#define BUZZ_PIN D6

void setup() {
  Serial.begin(9600);
  pinMode(PIR_PIN, INPUT);
  pinMode(BUZZ_PIN, OUTPUT);
}

void loop() {
  //Leemos el valor del pin del sensor
  int Valor = digitalRead(PIR_PIN);
  //Si se detecta movimiento
  if(Valor==HIGH){
    //Hacemos sonar el buzzer
    tone(BUZZ_PIN, 440);
    //Enviamos el valor
    Serial.println(Valor);  
  }
  else{
    //Si no se detecta movimiento dejamos de emitir ruido
    noTone(BUZZ_PIN);
  }
  //Usamos un delay de 1500 para poder evitar detectar falsos movimientos
  delay(1500);
}