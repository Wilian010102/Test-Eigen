package main

import (
	"bufio"
	"fmt"
	"os"
	"test/utils" 
)

func main() {
	// Read input from user
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Input string: ")
	input, _ := reader.ReadString('\n')

	// Remove newline characters from input
	input = input[:len(input)-1]

	// Call function from utils
	output := utils.ReverseAlphabets(input)
	fmt.Println("Output:", output)
}
