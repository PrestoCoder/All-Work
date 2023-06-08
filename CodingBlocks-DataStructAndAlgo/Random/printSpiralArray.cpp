#include<iostream>
using namespace std;

int main() {
    int sampleArray[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int numColsToPrint = 3;
    int numRowsToPrint = 2;
    
    bool colDir = true;
    bool rowDir = true;
    bool colToPrint = true;

    int currRow = 0;
    int currCol = 0;

    while(numColsToPrint > 0 && numRowsToPrint > 0) {
        if(colToPrint) {
            if(colDir) {
                for(int j = 0; j < numColsToPrint; j++) {
                    cout << sampleArray[currRow][currCol] << " " << currRow << currCol << endl;
                    currCol += 1;
                }
                colDir = false;
                currCol--;
            } else {
                for(int j = 0; j < numColsToPrint; j++) {
                    cout << sampleArray[currRow][currCol] << " " << currRow << currCol << endl;
                    currCol -= 1;
                }
                colDir = true;
                currCol++;
            }
            currCol--;
            numColsToPrint--;
            colToPrint = false;
        } else {
            if(rowDir) {
                for(int j = 0; j < numRowsToPrint; j++) {
                    cout << sampleArray[currRow][currCol] << " " << currRow << currCol << endl;
                    currRow += 1;
                }
                rowDir = false;
                currRow--;
            } else {
                for(int j = 0; j < numRowsToPrint; j++) {
                    cout << sampleArray[currRow][currCol] << " " << currRow << currCol << endl;
                    currRow -= 1;
                }
                rowDir = true;
                currRow++;
            }
            numRowsToPrint--;
            colToPrint = false;
        }
    }
}