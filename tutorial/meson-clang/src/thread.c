#include "main.h"

int thread_process(void){
    pid_t* pid;
    pid =(pid_t *)malloc(sizeof(pid_t));
 /* fork a child process */
   *pid = fork();

   if ((*pid) < 0) { /* error occurred */
    fprintf(stderr, "Fork Failed");
    return 1;
   }

   else if ((*pid) == 0) { /* child process */
    printf("I'm the child \n"); /* you can execute some commands here */
   }

   else { /* parent process */
    /* parent will wait for the child to complete */
      wait(NULL);
    /* When the child is ended, then the parent will continue to execute its code */
      printf("Child Complete \n");
   }
    free(pid);
    return 0;

}