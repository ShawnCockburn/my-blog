import React from 'react';

import { DataTable } from 'grommet';

const columns = [
    {
        property: '_id',
        header: "ID",
        primary: true,
    },
    {
        property: 'title',
        header: "Title",
        size: "small"
    },
    {
        property: 'description',
        header: 'Description',
        size: "large"
    },
    {
        property: 'date',
        header: 'Date',
        render: date =>
            date.date && new Date(date.date).toLocaleDateString('en-UK'),
        align: 'end',
    },
    {
        property: 'visible',
        header: 'Visible',
        render: vis =>
            vis.visible.toString()
    },
    {
        property: 'tags',
        header: 'Tags',
        render: tag =>
            JSON.stringify(tag.tags),
    }
];

const PostList = ({ data, ...rest }) => (
    <DataTable
        columns={columns}
        data={data}
        step={10}
        {...rest}
    />
);

export default PostList;