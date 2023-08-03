#include<iostream>
#include<vector>
#include<algorithm>
#include<unordered_map>
using namespace std;

unordered_map<int, unordered_map<int, int> > map1;

int main(){
	int n;
	cin >> n;
	vector< vector<int> > v1(n);
	for(int i = 0; i < n; i++) {
		int a;
		cin >> a;
		v1[i].push_back(a);

		int b;
		cin >> b;
		v1[i].push_back(b);

		int c;
		cin >> c;
		v1[i].push_back(c);
	}

	cout << helper(n, v1);
}