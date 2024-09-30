package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"test/utils"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	// Insert matrix size from user
	fmt.Print("Matrix size N: ")
	nLine, _ := reader.ReadString('\n')
	nLine = strings.TrimSpace(nLine)
	n, err := strconv.Atoi(nLine)
	if err != nil {
		fmt.Println("Size not valid!")
		return
	}

	// Create matrix NXN based user input
	matrix := make([][]int, n)
	fmt.Println("Input matrix element row by row with space:")
	for i := 0; i < n; i++ {
		fmt.Printf("Row %d: ", i+1)
		rowLine, _ := reader.ReadString('\n')
		rowLine = strings.TrimSpace(rowLine)
		rowStrings := strings.Split(rowLine, " ")

		if len(rowStrings) != n {
			fmt.Println("Number of element doesnt match with size N.")
			return
		}

		row := make([]int, n)
		for j := 0; j < n; j++ {
			row[j], err = strconv.Atoi(rowStrings[j])
			if err != nil {
				fmt.Println("Element input not valid")
				return
			}
		}
		matrix[i] = row
	}

	// Call function
	result := utils.DiagonalDifference(matrix)
	fmt.Println("Result difference diagonal:", result)
}
