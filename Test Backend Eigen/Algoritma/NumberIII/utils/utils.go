package utils

// Function for count letter from query in input
func CountOccurrences(input []string, query []string) []int {
	var result []int

	// Loop every letter in query
	for _, q := range query {
		count := 0
		// Count query in array input
		for _, word := range input {
			if word == q {
				count++
			}
		}
		result = append(result, count)
	}

	return result
}
