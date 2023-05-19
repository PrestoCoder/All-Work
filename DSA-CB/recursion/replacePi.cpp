#include<iostream>
#include<string>
using namespace std;

void replacePi(string& str, int index) {
	if(index == str.length()) {
		return;
	}
	if(str[index] == 'p' && str[index + 1] == 'i') {
		str[index] = '3';
		str[index + 1] = '.';
		str.insert(index + 2, "14");
		index = index + 4;
	} else {
		index += 1;
	}
	replacePi(str, index);
}

int main() {
	int n;
	cin >> n;
	for(int i = 0; i < n; i++) {
		string str;
		cin >> (str);
		replacePi(str, 0);
		cout << str << endl;
	}
	return 0;
}