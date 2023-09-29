const policy = {
    name: 'policies',
    title: 'Policies',
    type: 'document',
    field: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            require,
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug'
        }
    ]
}