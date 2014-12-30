ng-data-table
=============

Pure angular based data table. It did not depend on jquery data table.

Use following directive for simple data table to show on page.Make sure in mapping yo added "$.propertyname" you want to bind with particualar header and this property name must match with the property name you have in your json array of obects.

```html
<aio-data-table data="browsers" 
enable-paging="true" 
enable-search="true" 
mapping="{
            headers:['Rendering engine', 'Browser', 'Paltform(s)', 'Engine Version', 'Css Grade'],            
            map = ['$.engine', '$.browserinfo', '$.platform', '$.version', '$.css']
         }">
</aio-data-table>
```

Use following directive for round cornder data table to show on page.

```html
<aio-data-table-round-corners data="browsers" 
enable-paging="true" 
enable-search="true" 
mapping="{
            headers:['Rendering engine', 'Browser', 'Paltform(s)', 'Engine Version', 'Css Grade'],            
            map = ['$.engine', '$.browserinfo', '$.platform', '$.version', '$.css']
         }">
</aio-data-table-round-corners>
```

Sample Data
```javascript
browsers = [{
        engine: 'Awesome',
        browserinfo: 'Firefox 1.0',
        platform: 'Win 98+ / OSX.2+',
        version: '1.7',
        css: 'A',
        id: 0
    },
    {
        engine: 'Cool',
        browserinfo: 'Chrome',
        platform: 'Win 98+ / OSX.2+',
        version: '1.7',
        css: 'A',
        id: 0
    }
]
```
