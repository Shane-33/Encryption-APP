function caesarCipher(text, key) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var ch = text.charCodeAt(i);
    if (ch >= 32 && ch <= 126) {
      result += String.fromCharCode(((ch - 32 + key) % 95) + 32);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

function decryptCaesar(text, key) {
  return caesarCipher(text, 95 - key);
}

function scytaleCipher(text, key) {
  var result = "";
  var columns = Math.ceil(text.length / key);
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < key; j++) {
      var idx = i + j * columns;
      result += idx < text.length ? text.charAt(idx) : " ";
    }
  }
  return result;
}

function decryptScytale(text, key) {
  var result = "";
  var rows = Math.ceil(text.length / key);
  var charsPerRow = Math.floor(text.length / rows);
  for (var i = 0; i < charsPerRow; i++) {
    for (var j = 0; j < rows; j++) {
      var idx = i + j * charsPerRow;
      result += text.charAt(idx);
    }
  }
  return result;
}

function encrypt() {
  var encryptionType = document.getElementById("encryptionType").value;
  var plainText = document.getElementById("plainText").value;
  var key = parseInt(document.getElementById("key").value);
  var encryptedText;

  if (encryptionType === "Copy") {
    encryptedText = plainText;
  } else if (encryptionType === "Caesar") {
    encryptedText = caesarCipher(plainText, key);
  } else if (encryptionType === "Scytale") {
    encryptedText = scytaleCipher(plainText, key);
  }

  document.getElementById("cipherText").value = encryptedText;
}

function decrypt() {
  var encryptionType = document.getElementById("encryptionType").value;
  var cipherText = document.getElementById("cipherText").value;
  var key = parseInt(document.getElementById("key").value);
  var decryptedText;

  if (encryptionType === "Copy") {
    decryptedText = cipherText;
  } else if (encryptionType === "Caesar") {
    decryptedText = caesarCipher(cipherText, 95 - key); // Decrypting Caesar cipher
  } else if (encryptionType === "Scytale") {
    decryptedText = decryptScytale(cipherText, key); // Decrypting Scytale cipher
  }

  document.getElementById("plainText").value = decryptedText;
}
