/* The same instance of Foo will be passed to three different threads.
Thread A will call first(), thread B will call second(), and thread C will call third().
Design a mechanism and modify the program to ensure that 
second() is executed after first(), and third() is executed after second(). */

#include <semaphore.h>

typedef struct {
    // User defined data may be declared here.
    sem_t second;
    sem_t third;
} Foo;

Foo* fooCreate() {
    Foo* obj = (Foo*) malloc(sizeof(Foo));
    // Initialize user defined data here.
    sem_init(&obj->second, 0, 0);
    sem_init(&obj->third, 0, 0);
    return obj;
}

void first(Foo* obj) {
    
    // printFirst() outputs "first". Do not change or remove this line.
    printFirst();
    sem_post(&obj->second);
}

void second(Foo* obj) {
    sem_wait(&obj->second);
    // printSecond() outputs "second". Do not change or remove this line.
    printSecond();
    sem_post(&obj->third);
}

void third(Foo* obj) {
    sem_wait(&obj->third);
    // printThird() outputs "third". Do not change or remove this line.
    printThird();
}

void fooFree(Foo* obj) {
    // User defined data may be cleaned up here.
    sem_destroy(&obj->second);
    sem_destroy(&obj->third);
    free(obj);
}