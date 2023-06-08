#include<bits/stdc++.h>
#include<iostream>
using namespace std;

class ComplexNumber {
    
    private:

    float real;
    float imaginary;

    public:
    ComplexNumber(float realNum = 0, float imaginaryNum = 0) {
        real = realNum;
        imaginary = imaginaryNum;
    }

    ComplexNumber* add(float real1, float imag1, float real2, float imag2) {
        ComplexNumber * c =  new ComplexNumber(real1 + real2, imag1 + imag2);
        return c;
    }

    ComplexNumber* subtract(float real1, float imag1, float real2, float imag2) {
        ComplexNumber * c =  new ComplexNumber(real1 - real2, imag1 - imag2);
        return c;
    }

    ComplexNumber* multiply(float real1, float imag1, float real2, float imag2) {
        ComplexNumber * c =  new ComplexNumber(real1 * real2, imag1 * imag2);
        return c;
    } 

    ComplexNumber* divide(float real1, float imag1, float real2, float imag2) {
        ComplexNumber * c =  new ComplexNumber(real1 / real2, imag1 / imag2);
        return c;
    }

    float getReal() {
        return real;
    }

    float getImag() {
        return imaginary;
    }


};

int main() {

    ComplexNumber c1(2, 3);
    ComplexNumber * c2 = c1.divide(c1.getReal(), c1.getImag(), 4, 6);
    cout << c2 -> getReal() << " " << c2 -> getImag();
    return 0;
}