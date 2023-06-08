#include<iostream>
using namespace std;
int main() {
	int numOfRows, numOfCols;
	int arr[10][10];
	cin >> numOfRows >> numOfCols;
	// Taking 2-d array as input
	for(int i = 0; i < numOfRows; i++) {
		for(int j = 0; j < numOfCols; j++) {
			cin >> arr[i][j];
		}
	}
	// Printing spiral
    int m = numOfRows;
    int n = numOfCols;
	int minRowNum = 1;
	int minColNum = 0;
	int currRow = 0; 
	int currCol = 0;
	int direction = 0; // 0, 1, 2, 3
    int elementCount = 0;
	while(numOfRows > 0 && numOfCols > 0 && (elementCount < m*n)) {
        // cout << "ElementCount:- " << elementCount << endl;
		if(direction == 0) {
			int i = currRow;
			for(int j = currCol; j < numOfCols; j++) {
				cout << arr[i][j] << ", ";
                elementCount++;
			}
			direction = (direction + 1) % 4;
			currRow++;
			currCol = numOfCols - 1;
            
		}
		else if(direction == 1) {
			int j = currCol;
			for(int i = currRow; i < numOfRows; i++) {
				cout << arr[i][j] << ", ";
                elementCount++;
			}
			direction = (direction + 1) % 4;
			currRow = numOfRows - 1;
			currCol--;
		}
		else if(direction == 2) {
			int i = currRow;
			for(int j = currCol; j >= minColNum; j--) {
				cout << arr[i][j] << ", ";
                elementCount++;
			}
			direction = (direction + 1) % 4;
			currCol = minColNum;
			currRow--;
		}
		else if(direction == 3) {
			int j = currCol;
			for(int i = currRow; i >= minRowNum; i--) {
				cout << arr[i][j] << ", ";
                elementCount++;
			}
			direction = (direction + 1) % 4;
			numOfCols -= 1;
			numOfRows -= 1;
			currRow = minRowNum;
			minColNum++;
			minRowNum++;
			currCol = minColNum;
		}
	}
	cout << "END";
	return 0;
}