


## Grid System

Bootstrap offers a powerful grid system to design responsive web layouts that adapt to various screen sizes. This guide will walk you through the basics of the Bootstrap grid system and how to effectively utilize it.

### Basics of the Grid System

The grid system in Bootstrap is made up of rows and columns that allow you to organize and layout your content. The columns will automatically stack on top of each other when the screen size is reduced.

### Code Example

```html
<div class="container">
    <div class="row">
        <div class="col-lg-2">Column 1</div>
        <div class="col-lg-2">Column 2</div>
    </div>
</div>
```

### Working with Rows and Columns

1. **Containers**: Begin with a `.container` class to wrap rows and columns. It ensures everything is aligned and organized.
2. **Rows**: Columns should be placed inside a `.row` class, which provides the correct padding and formatting.
3. **Columns**: Define columns using the `.col` class, followed by a viewport size and the number of columns it should span. For example, `.col-lg-2` means the column spans 2 out of the 12 grid columns on a large viewport.

### Code Example:

```html
<div class="container">
    <div class="row">
        <div class="col-lg-2" style="background-color:lavender;">Column 1</div>
        <div class="col-lg-10" style="background-color:lavenderblush;">Column 2</div>
    </div>
</div>
```

### Responsive Design with Grid System

Bootstrap's grid system adjusts to different viewport sizes:

- **Large (`lg`)**: For larger desktops.
- **Medium (`md`)**: For tablets.
- **Small (`sm`)**: For landscape phones.
- **Extra Small (`xs`)**: For portrait phones.

To set specific column widths for different devices, you can combine these viewport sizes with column numbers.

### Code Example

```html
<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-3 col-xs-1">Section</div>
    </div>
</div>
```

### Offsetting Columns

To create space before a column, use the `.offset` class followed by the viewport size and number of columns to offset.

### Code Example

```html
<div class="container">
    <div class="row">
        <div class="col-lg-2 col-lg-offset-1" style="background-color:gray;">Offset Column</div>
    </div>
</div>
```

### Fluid Containers

To make your columns stretch across the entire width of the browser window, use `.container-fluid` instead of `.container`.

### Code Example

```html
<div class="container-fluid">
    <!-- Rows and columns here -->
</div>
```

### Inspecting with Chrome

Google Chrome's developer tools allow you to inspect element sizes and simulate how your website looks on various devices. By selecting different devices from the dropdown, you can preview the layout adjustments based on breakpoints.

### Conclusion

Bootstrap's grid system is a versatile tool for creating responsive web designs. Always remember to test your layouts on different devices to ensure a consistent user experience. If you have any questions, feel free to ask.

