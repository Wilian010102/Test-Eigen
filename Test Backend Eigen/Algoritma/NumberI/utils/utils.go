package utils

import "unicode"

func ReverseAlphabets(s string) string {
	var letters []rune

	// collect alphabet from string
	for _, ch := range s {
		if unicode.IsLetter(ch) {
			letters = append(letters, ch)
		}
	}

	// result with alphabet reverse
	var result []rune
	letterIndex := len(letters) - 1

	// compile final result
	for _, ch := range s {
		if unicode.IsLetter(ch) {
			// enter alphabet from reverse
			result = append(result, letters[letterIndex])
			letterIndex--
		} else {
			// If it is not a letter, just enter it
			result = append(result, ch)
		}
	}

	return string(result)
}
