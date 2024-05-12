// Asignacion

var x = 867;
var y = 77;
console.log('Asignacion :', x, y);

// Adicion

x = x + y;
console.log('Adicion :', x);

// Adicion 2

x += y;
console.log('Adicion 2 :', x);

// Resta

x -= y;
console.log('Resta :', x);

// Resta 2

x = x - y;
console.log('Resta 2 :', x);

// Multiplicacion

x *= y;
console.log('Multiplicacion :', x);

// Multiplicacion 2

x = x * y;
console.log('Multiplicacion 2 :', x);

// Division

x /= y;
console.log('Division :', x);

// Division 2

x = x / y;
console.log('Division 2 :', x);

// Residuo

x %= y;
console.log('Residuo :', x);

// Residuo 2

x = x % y;
console.log('Residuo 2 :', x);

// Exponenciacion

x **= y;
console.log('Exponenciacion :', x);

// Exponenciacion 2

x = x ** y;
console.log('Exponenciacion 2 :', x);

// Desplazamiento a la izquierda

x <<= y;
console.log('Desplazamineto Izquierda :', x);

// Desplazamiento a la izquierda 2

x = x << y;
console.log('Desplazamineto Izquierda 2 :', x);


// Desplazamiento a la derecha

x >>= y;
console.log('Desplazamineto Derecha :', x);

// Desplazamiento a la derecha 2

x = x >> y;
console.log('Desplazamineto Derecha 2 :', x);

// Desplazamiento a la derecha sin signo

x >>>= y;
console.log('Desp. Derecha sin Signo :', x);

// Desplazamiento a la derecha sin signo 2

x = x >>> y;
console.log('Desp. Derecha sin Signo 2 :', x);

// AND Bit a bit

x &= y;
console.log('AND Bit a bit :', x);

// AND Bit a bit 2

x = x & y;
console.log('AND Bit a bit 2 :', x);

// XOR bit a bit

x ^= y;
console.log('XOR Bit a bit :', x);

// XOR bit a bit 2

x = x ^ y;
console.log('XOR Bit a bit 2 :', x);

// OR bit a bit 2

x |= y;
console.log('OR Bit a bit :', x);

// OR bit a bit 2

x = x | y;
console.log('OR Bit a bit 2 :', x);

// AND lógico

x &&= y;
console.log('AND lógico :', x);

// AND lógico 2

x && (x = y);
console.log('AND lógico 2 :', x);

// OR lógico

x ||= y;
console.log('OR lógico :', x);

// OR lógico 2

x || (x = y);
console.log('OR lógico 2 :', x);

// Asignacion anulación lógica	

x ??= y;
console.log('Anulación lógica :', x);

// Asignacion anulación lógica 2

x ?? (x = y);
console.log('Anulación lógica 2 :', x);
