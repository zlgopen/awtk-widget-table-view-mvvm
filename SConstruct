import os
import scripts.app_helper as app

DEPENDS_LIBS = [
  {
    "root" : '../awtk-mvvm',
    'shared_libs': ['mvvm'],
    'static_libs': []
  },
  {
    "root" : '../awtk-widget-table-view',
    'shared_libs': ['table_view'],
    'static_libs': []
  }
]

helper = app.Helper(ARGUMENTS);
helper.set_deps(DEPENDS_LIBS).call(DefaultEnvironment)

SConscriptFiles = ['src/SConscript']
SConscript(SConscriptFiles)
