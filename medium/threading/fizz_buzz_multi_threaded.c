/*
https://leetcode.com/problems/fizz-buzz-multithreaded/
You have the four functions:
    printFizz that prints the word "Fizz" to the console,
    printBuzz that prints the word "Buzz" to the console,
    printFizzBuzz that prints the word "FizzBuzz" to the console, and
    printNumber that prints a given integer to the console.

You are given an instance of the class FizzBuzz that has four functions: 
fizz, buzz, fizzbuzz and number. The same instance of FizzBuzz will be passed to four different threads:
    Thread A: calls fizz() that should output the word "Fizz".
    Thread B: calls buzz() that should output the word "Buzz".
    Thread C: calls fizzbuzz() that should output the word "FizzBuzz".
    Thread D: calls number() that should only output the integers.

Modify the given class to output the series [1, 2, "Fizz", 4, "Buzz", ...] 
where the ith token (1-indexed) of the series is:
    "FizzBuzz" if i is divisible by 3 and 5,
    "Fizz" if i is divisible by 3 and not 5,
    "Buzz" if i is divisible by 5 and not 3, or
    i if i is not divisible by 3 or 5.

Implement the FizzBuzz class:
    FizzBuzz(int n) Initializes the object with the number n 
    that represents the length of the sequence that should be printed.
    void fizz(printFizz) Calls printFizz to output "Fizz".
    void buzz(printBuzz) Calls printBuzz to output "Buzz".
    void fizzbuzz(printFizzBuzz) Calls printFizzBuzz to output "FizzBuzz".
    void number(printNumber) Calls printnumber to output the numbers.
*/

#include <pthread.h>

// Try moving the check for being over n outside of the while loop
typedef struct {
    int n;
    int curr;
    pthread_mutex_t m;
    pthread_cond_t cv;
} FizzBuzz;

FizzBuzz* fizzBuzzCreate(int n) {
    FizzBuzz* obj = (FizzBuzz*) malloc(sizeof(FizzBuzz));
    obj->n = n;
    obj->curr = 1;
    pthread_mutex_init(&obj->m, NULL);
    pthread_cond_init(&obj->cv, NULL);
    return obj;
}

// printFizz() outputs "fizz".
void fizz(FizzBuzz* obj) {
    while(1){
        pthread_mutex_lock(&obj->m);
        while (obj->curr <= obj->n &&
                (obj->curr % 5 == 0 || obj->curr % 3 != 0)){
            pthread_cond_wait(&obj->cv, &obj->m);
        }

        if(obj->curr > obj->n) return;

        printFizz();
        obj->curr++;
        pthread_cond_broadcast(&obj->cv);
        pthread_mutex_unlock(&obj->m);
    }
}

// printBuzz() outputs "buzz".
void buzz(FizzBuzz* obj) {
    while(1){
        pthread_mutex_lock(&obj->m);
        while (obj->curr <= obj->n &&
                (obj->curr % 3 == 0 || obj->curr % 5 != 0)){
            pthread_cond_wait(&obj->cv, &obj->m);
        }

        if(obj->curr > obj->n) return;

        printBuzz();
        obj->curr++;
        pthread_cond_broadcast(&obj->cv);
        pthread_mutex_unlock(&obj->m);
    }
}

// printFizzBuzz() outputs "fizzbuzz".
void fizzbuzz(FizzBuzz* obj) {
    while(1){
        pthread_mutex_lock(&obj->m);
        while (obj->curr <= obj->n &&
                (obj->curr % 3 != 0 || obj->curr % 5 !=0)){
            pthread_cond_wait(&obj->cv, &obj->m);
        }

        if(obj->curr < obj->n) return;

        printFizzBuzz();
        obj->curr++;
        pthread_cond_broadcast(&obj->cv);
        pthread_mutex_unlock(&obj->m);
    }
}

// You may call global function `void printNumber(int x)`
// to output "x", where x is an integer.
void number(FizzBuzz* obj) {
    while(1){
        pthread_mutex_lock(&obj->m);
        while (obj->curr <= obj->n &&
                (obj->curr % 5 == 0 || obj->curr % 3 == 0)){
            pthread_cond_wait(&obj->cv, &obj->m);
        }

        if (obj->curr > obj->n) return;

        printNumber(obj->curr);
        obj->curr++;
        pthread_cond_broadcast(&obj->cv);
        pthread_mutex_unlock(&obj->m);
    }
}

void fizzBuzzFree(FizzBuzz* obj) {
    pthread_mutex_destroy(&obj->m);
    pthread_mutex_destroy(&obj->cv);
    free(obj);
}