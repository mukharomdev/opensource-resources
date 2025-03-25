main = files('main.c')
threads = files(['thread.c'])
main_sources += main

libtr = static_library('tr',
	threads,
	include_directories:inc)