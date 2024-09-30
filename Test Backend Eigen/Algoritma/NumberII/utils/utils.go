package utils

import "strings"

// Function for search longest word from sentences
func Longest(sentence string) (string, int) {
	words := strings.Fields(sentence) //Split sentences into words 
	var longestWord string
	maxLength := 0

	for _, word := range words {
		if len(word) > maxLength {
			longestWord = word
			maxLength = len(word)
		}
	}

	return longestWord, maxLength
}
