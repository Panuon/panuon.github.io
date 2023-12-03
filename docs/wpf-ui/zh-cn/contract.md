# 约定

## 概述

`Panuon.WPF.UI` 中分为两种控件：原生控件和自定义控件。
原生控件包括： _Button 按钮_ 、 _ToggleButton 状态按钮_ 、 _Slider 滑条_ 、 _ProgressBar 进度条_ 等WPF中原本就有的控件；  
自定义控件包括： _WindowX 窗体X_ 、 、 _Breadcrumb 面包屑_ 、 _Carousel 轮播_ 、 _ColorPickerX 颜色选择器X_ 等在控件库内定义的控件。  

对于原生控件，必须先从资源字典中引用对应的样式（参考[引用资源字典中的样式](#引用资源字典中的样式)部分），才能使用 `Panuon.WPF.UI` 中提供的属性并产生效果。而自定义控件即使不引用资源字典，也可以直接使用。  

## 引用资源字典中的样式

原生控件必须要引用资源字典后才能使用。  
考虑到开发者可能会与其他控件库一起使用，为了避免冲突，`Panuon.WPF.UI` 中每种原生控件的样式都可以从 `独立样式键(StyleKeys)` 或 `全局覆盖样式` 两种方式中任选一个。前者只会在指定的控件上应用样式和效果，而后者会覆盖该类型的所有控件。  

### 添加资源字典

资源字典可以被添加到 `App.xaml` 中的 `App` 节点、任意窗体或控件 `*.xaml` 中的 `Window` 、 `UserControl` 等节点内的 `Resources` 属性中。  
如果添加在 `App` 节点下， 该资源字典会对整个程序中的所有控件生效；而添加在窗体或控件节点下，该资源字典只对该控件和该控件内的所有子控件生效。  
`这也意味着，如果没有通过这两种方式为某个原生控件应用样式，该控件出现的任何变化都是外界因素（例如其他控件库）导致的。`  

#### 方式一、使用全局资源字典  

要直接使用 `Panuon.WPF.UI` 中提供的所有原生控件样式，可以使用以下资源字典：
```xml
<ResourceDictionary Source="pack://application:,,,/Panuon.WPF.UI;component/Control.xaml" />
```
_Control.xaml_ 是一个资源字典集合，它包含了所有 `Panuon.WPF.UI` 中提供的原生样式。  
如果只想引用某一种原生控件的样式，不要添加 _Control.xaml_ ；使用以下资源字典：
```xml
<ResourceDictionary Source="pack://application:,,,/Panuon.WPF.UI;component/$TypeName$.xaml" />
```
`$TypeName$` 需要替换为具体的控件名称，例如 `Button` 、 `ToggleButton` 等。  

#### 方式二、使用独立资源字典  

这种方式不会覆盖任何默认样式。  
因此，如果只是希望在指定的某个或某一批控件上应用样式，不要添加方式一中的资源字典；换用以下资源字典：
```xml
<ResourceDictionary Source="pack://application:,,,/Panuon.WPF.UI;component/$TypeName$Style.xaml" />
```
`$TypeName$` 需要替换为具体的控件名称，例如 `Button` 、 `ToggleButton` 等。  
使用该资源字典后，由于不会覆盖默认样式，因此还需要为控件指定 `Style`。  
```xml
<Button Style="{StaticResource {pu:StyleKeys.ButtonStyle}}" />
```
如果要在现有样式的基础上进行二次编辑，则需要为Style指定 `BasedOn`。
```xml
<Style TargetType="Button" BasedOn="{StaticResource {pu:StyleKeys.ButtonStyle}}" />
```
如果该Style是在 `App.xaml` 之外的资源字典中编写的，请确保该资源字典能访问到 `Panuon.WPF.UI` 中的样式（BasedOn只能使用StaticResource，会在当前资源字典内查找资源）。如果出现找不到样式的错误，请在该资源字典的 `MergedResourceDictionaries` 中添加相应的资源字典：
```xml
<ResourceDictionary ...
                    xmlns:panuon="clr-namespace:Panuon.WPF;assembly=Panuon.WPF">
    <ResourceDictionary.MergedDictionaries>
        <panuon:SharedResourceDictionary Source="pack://application:,,,/Panuon.WPF.UI;component/Styles/ButtonStyle.xaml" />
    </ResourceDictionary.MergedDictionaries>
    ...
</ResourceDictionary>
```
`SharedResourceDictionary` 不会重复创建资源字典中的所有内容，因此不必担心资源开销问题。该类型也同样适用于你的自定义资源字典，或是其他控件库的。  