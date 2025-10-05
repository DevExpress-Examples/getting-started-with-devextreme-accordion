$(function () {
    $("#accordion").dxAccordion({
        dataSource: employees,
        animationDuration: 450,
        collapsible: true,
        multiple: true,
        itemTitleTemplate: function (data) {
            return data.FirstName + " " + data.LastName;
        },
        itemTemplate: function (data) {
            return data.Position + " from " + data.State;
        }
    });
});