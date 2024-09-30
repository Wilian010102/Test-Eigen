package utils

// Function to calculate the difference of diagonal sums in NxN matrices
func DiagonalDifference(matrix [][]int) int {
	n := len(matrix)
	primaryDiagonal := 0
	secondaryDiagonal := 0

	// Calculate primary diagonal and secondary diagonal
	for i := 0; i < n; i++ {
		primaryDiagonal += matrix[i][i]
		secondaryDiagonal += matrix[i][n-i-1]
	}

	// Return abosolute difference from of all diagonal
	return abs(primaryDiagonal - secondaryDiagonal)
}

// Function for calculate absolute value
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
