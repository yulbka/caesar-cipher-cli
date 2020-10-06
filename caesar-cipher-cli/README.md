# caesar-cipher-cli

This is console util for encoding/decoding text with Caesar's cipher. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

### Installation

Clone this repo:
```
git clone https://github.com/yulbka/caesar-cipher-cli.git
```

### Options

```
-a, --action: encode or decode - required
-s, --shift: number of shift positions - required
-i, --input: an input file - optional
-o, --output: an output file - optional
```

### Examples

```
node index -a encode -s 7 -i input.txt -o output.txt
node index --action decode --shift 15 --input code.txt --output result.txt
node index -s 1 -a encode
```
