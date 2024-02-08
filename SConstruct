import os
import scripts.app_helper as app

DEPENDS_LIBS = [
  {
    "root" : '../awtk-widget-table-view',
    'shared_libs': ['table_view'],
    'static_libs': []
  }
]
ARGUMENTS['WITH_MVVM'] = 'true'
helper = app.Helper(ARGUMENTS);
helper.set_dll_def('src/table_view_mvvm.def').set_deps(DEPENDS_LIBS).call(DefaultEnvironment)

SConscriptFiles = ['src/SConscript', 'demos/SConscript']
helper.SConscript(SConscriptFiles)
