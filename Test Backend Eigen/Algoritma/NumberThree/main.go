package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"test/utils"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	// Insert array input from user
	fmt.Print("insert array input: ")
	inputLine, _ := reader.ReadString('\n')
	inputArray := strings.Fields(inputLine)

	// Insert array query from user
	fmt.Print("Insert array query: ")
	queryLine, _ := reader.ReadString('\n')
	queryArray := strings.Fields(queryLine)

	// Call function from utils.go
	result := utils.CountOccurrences(inputArray, queryArray)

	// Show result
	fmt.Println("OUTPUT:", result)
}
