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