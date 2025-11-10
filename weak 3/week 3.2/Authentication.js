/*   Hash vs Encryption — The Difference

Feature	                                   Hashing	                                                     Encryption
Purpose	               To verify data integrity (check if data changed)	                    To keep data secret (make it unreadable)
Reversible?	                      ❌ No — one-way process	                               ✅ Yes — can be reversed using a key
Used For	                 Password storage, file verification	                           Securing communication, messages, files
Output	            Fixed-length hash (like 5f4dcc3b5aa765d61d8327deb882cf99)	             Encrypted text (like U2FsdGVkX1+E6g==)
Key Used?                       	No key (only algorithm)	                                        Yes — uses encryption key
Algorithms	                      SHA-256, SHA-512, MD5, bcrypt	                                      AES, RSA, DES, 3DES
Example                  password123 → ef92b778bafe771e89245b89ecbc08a4             	       “Hello” → Encrypted text using AES

------------------------------------------------------------------------------------

🔐 Hashing Example------ Used for passwords:----

const crypto = require("crypto");
const password = "Harshit123";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log(hash); // 🔒 8d969eef6ecad3c29a3a629280e686cf...

🧩 Same input → same output always
⚠️ You can’t reverse the hash to get the original password.

--------------------------------------------------------------------------------------

🔑 Encryption Example -----------Used for secure communication:---

const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Harshit123", "utf-8", "hex");
encrypted += cipher.final("hex");

console.log(encrypted); // 🔐 Encrypted text


✅ Can be decrypted later using the same key and IV.
 
------------------------------------------------------------------------------------

🧩 In Simple Words ----
Hashing = fingerprint 🖐️
→ Once created, you can’t reverse it. Used to verify.
--------------------------------
Encryption = locked box 🔒
→ You can open it with the key. Used to protect.
*/

