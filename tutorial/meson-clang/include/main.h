#ifndef LIBMAIN_H
#define LIBMAIN_H
#if defined(__STDC_NO_THREADS__ )
#define __MESON_CLANG_THREADS 1
#include <threads.h>
#else
#define __MESON_CLANG_THREADS 0
#endif

//###
#if defined(__STDC_NO_ATOMICS__)
#define __MESON_CLANG_ATOMICS 1
#include <stdatomic.h>
#else
#define __MESON_CLANG_ATOMICS 0
#endif
//#####
#if defined(__GNUC__) || defined(__linux__)
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <uv.h>
extern int thread_process(void);

#endif
#endif 