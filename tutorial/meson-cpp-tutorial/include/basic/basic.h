#ifndef LIB_BASIC_H
#define LIB_BASIC_H
#include <cstring>
#include <cctype>
#include <string>
using namespace std;

// variable
extern int c;

extern string nama;
extern float d;
extern double e;
extern char f;

/* template
 * using :
 * - typename
 * - class 
 * 
 * 
*/
template <typename T>
T add(T a,T b){
	return a + b;
 }

template <class T,int N>
 T add(T val){
 	return val * N;
 }

#endif