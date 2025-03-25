## setup ##
#setup project 
project('meson-clang', 'c',
  version : '0.1',
  default_options : ['warning_level=3'])


# sources tracking
main_sources = []

# setup folder 
inc = include_directories('include')
subdir('include')
subdir('src')

# setup module 
pkg = import('pkgconfig')
lbuv_dep = dependency('libuv')
lib = library('sharedtr', dependencies : [lbuv_dep])
h = ['.', 'include'] # subdirectories of ${prefix}/${includedir} to add to header path
pkg.generate(libraries : lib,
             subdirs : h,
             version : '1.0',
             name : 'sharedtr',
             filebase : 'simple',
             description : 'A simple demo library.')

## Target ##
exe = executable('meson_clang',
 main_sources,
 include_directories:inc,
 link_with:[lib,libtr],
 link_args:['-luv'],
  install : true)


## test ##
test('basic', exe)
