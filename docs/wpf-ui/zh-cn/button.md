# Button 按钮

## 前提条件

该控件是原生控件，必须引用资源字典中的样式才能生效。  
请参照[约定 -> 引用资源字典中的样式](contract.md#引用资源字典中的样式)部分，将样式引入到你的程序或控件中。  

## 示例


## 附加属性

_附加类：_ _`ButtonHelper`_

属性名称|类型|默认值|描述
-|-|-|-
Icon|object|null|图标，可以是文本或控件。细节属性可以通过IconHelper控制。
IconPlacement|IconPlacement|Left|图标相对于内容的显示位置。
CornerRadius|CornerRadius|0,0,0,0|圆角大小。
ShadowColor|Color?|null|阴影颜色，为null时不显示。细节属性可以通过ShadowHelper控制。
IsPending|bool|false|等待模式，在图标的位置显示一个Spin控件。注意，等待模式下按钮不会被禁用。
PendingSpinStyle|Style|-|等待模式下显示的Spin控件的样式。
ClickEffect|ClickEffect|None|鼠标按下时的特殊效果，可以配合等待模式一起使用。
HoverBackground|Brush|?|鼠标悬浮时的背景色。
HoverBorderBrush|Brush|null|鼠标悬浮时的边框色。
HoverBorderThickness|Thickness?|null|鼠标悬浮时的边框粗细，为null时不变。
HoverCornerRadius|CornerRadius?|null|鼠标悬浮时的圆角大小，为null时不变。
HoverForeground|Brush|null|鼠标悬浮时的前景色。
HoverShadowColor|Color?|null|鼠标悬浮时的阴影颜色，为null时不变。
ClickBackground|Brush|?|鼠标点击时的背景色。
ClickBorderBrush|Brush|null|鼠标点击时的边框色。
ClickBorderThickness|Thickness?|null|鼠标点击时的边框粗细，为null时不变。
ClickCornerRadius|CornerRadius?|null|鼠标点击时的圆角大小，为null时不变。
ClickForeground|Brush|null|鼠标点击时的前景色。
ClickShadowColor|Color?|null|鼠标点击时的阴影颜色，为null时不变。

## 可以在控件上使用的其他附加类型

附加类型|属性|描述
-|-|-
WindowX|IsDragMoveArea|当控件位于 _WindowX_ 的标题栏区域中时（`HeaderTemplate`），必须将此属性设为`False`才能让鼠标点击到按钮。
IconHelper|-|调整图标的位置、边距、字体字号等属性。
ShadowHelper|-|调整阴影的扩散半径、投影距离等属性。