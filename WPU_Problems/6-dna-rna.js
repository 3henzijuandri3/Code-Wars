/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

Example
"GCAT"  =>  "GCAU"
*/

// Imperative Approach
function DNAtoRNA(word){
    let rna = '';
    for(i of word){
        rna += (i == 'T' ? 'U' : i)
    }
    console.log(rna)
}

// Declarative Approach
const DNAtoRNA2 = (word) => word.replaceAll('T', 'U')

DNAtoRNA('GCU')


a = DNAtoRNA2('GCTT')
a