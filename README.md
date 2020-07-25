# awtk-widget-table-view-mvvm

table view 有点特殊，awtk-mvvm 缺省的方法不支持 table view 的绑定，本项目实现了一个自定义的 binder，让 awtk-mvvm 支持 table view 的绑定。

## 准备

1. 获取 awtk 并编译

```
git clone https://github.com/zlgopen/awtk.git
cd awtk; scons; cd -
```

2. 获取 awtk-mvvm 并编译

```
git clone https://github.com/zlgopen/awtk-mvvm.git
cd awtk-mvvm; scons; cd -
```

3. 获取 awtk-widget-table-view 并编译

```
git clone https://github.com/zlgopen/awtk-widget-table-view.git
cd awtk-widget-table-view; scons; cd -
```

## 编译

```
scons
```

## 用法

```c
view_model_t *scores_view_model_create(navigator_request_t *req) {
  csv_file_t *csv = csv_file_create("data/scores_large.csv", ',');
  object_t *obj = csv_file_object_create(csv);

  return view_model_array_object_wrapper_create(obj);
}

ret_t application_init(void) {
  table_view_register();
  table_client_custom_binder_register();
  view_model_factory_register("scores", scores_view_model_create);

  return navigator_to("table_view");
}
```
> 完整示例请参考：https://github.com/zlgopen/awtk-mvvm-c-examples/blob/master/src/table_csv_view.c

## 参考

* [awtk-mvvm-c-examples](https://github.com/zlgopen/awtk-mvvm-c-examples)
* [awtk-mvvm](https://github.com/zlgopen/awtk-mvvm)
