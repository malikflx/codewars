// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Solution:
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // Step 1:
  let dnaArr = dna.split('');
  // Step 2:
  for (i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === 'T') {
      dnaArr[i] = 'U';
    }
  }
  // Step 3:
  dna = dnaArr.join('');
  // Step 4:
  return dna;
}

// Step 1: convert dna string to an array
// Step 2: Loop through array to check for "T". If "T" exists, change it to "U".
// Step 3: Join array to turn it back into a string
// Step 4: Return the updated string