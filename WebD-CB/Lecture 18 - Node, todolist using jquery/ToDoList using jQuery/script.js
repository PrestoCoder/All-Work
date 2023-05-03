$('body')
    .append(
        $('<main></main>')
            .append(
                $('<h1></h1>')
                    .text('Task List')
            )
            .append(
                $('<input>')
                    .addClass('inputTask')
                    .attr('type', 'text')
            )
            .append(
                $('<button></button>')
                    .addClass('addTaskButton')
                    .text('Add task')
                    // In jQuery, for an event listener, $(this) is equivalent to event.target
                    // To be able to use this in jQuery, arrow functions can't be used
                    .click(function() {
                        $('.taskList')
                            .append(
                                $('<li></li>')
                                    .addClass('item')
                                    .append(
                                        $('<div></div>')
                                            .addClass('taskMain')
                                            .append(
                                                $('<input>')
                                                    .addClass('checkTask')
                                                    .attr('id', 'checkTask')
                                                    .attr('type', 'checkbox')
                                                    .click(function() {
                                                        let task = $(this).next();
                                                        task.toggleClass('taskChecked')
                                                    })
                                            )
                                            .append(
                                                $('<span>')
                                                    .text($('.inputTask').val())
                                                    .addClass('task')
                                            )
                                    )
                                    .append(
                                        $('<div></div>')
                                        .addClass('taskButtons')
                                        .append(
                                            $('<span></span>')
                                                .addClass('upArrow')
                                                .text('⬆')
                                                .click(function() {
                                                    let associatedListItem = $(this).parent().parent();
                                                    let previousItem = associatedListItem.prev();
                                                    associatedListItem.insertBefore(previousItem)
                                                })
                                        )
                                        .append(
                                            $('<span></span>')
                                                .addClass('downArrow')
                                                .text('⬇')
                                                .click(function() {
                                                    let associatedListItem = $(this).parent().parent();
                                                    let nextItem = associatedListItem.next();
                                                    associatedListItem.insertAfter(nextItem)
                                                })
                                        )
                                        .append(
                                            $('<span></span>')
                                                .addClass('deleteButton')
                                                .text('❌')
                                                .click(function() {
                                                    let associatedListItem = $(this).parent().parent();
                                                    associatedListItem.remove()
                                                })
                                        )
                                    )
                            )
                    })
            )
            .append(
                $('<ul></ul>')
                    .addClass('taskList')
            )
    )