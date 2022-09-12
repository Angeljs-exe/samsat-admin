export const userColumns =
    [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'Full Name', width: 200 },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 260,
        //   renderCell: (params) => {
        //     return(
        //       <>
        //       <span>{params.row.firstName}</span>
        //       <span>{params.row.lastName}</span>
        //       </>
        //     )
        //   }
        // },
        {
          field: 'email',
          headerName: 'E-mail',
          type: 'string',
          width: 180,
        },
        {
          field: 'telepon',
          headerName: 'Nomor Telepon',
          type: 'string',
          width: 180,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 180,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            }
          },
      ];

//temp data
export const userRows = [
        {
            id: 1,
            user: "Vini Vanisa",
            email: "vinivanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
        {
            id: 2,
            user: "Inka Wangania",
            email: "inkavanini@gmail.com",
            telepon: '087657423123',
            status: "Approved",
        },
        {
            id: 3,
            user: "Eca mandak",
            email: "ecavanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
        {
            id: 4,
            user: "Dio Tendean",
            email: "diovanini@gmail.com",
            telepon: '087657423123',
            status: "Approved",
        },
        {
            id: 5,
            user: "Andrey Desayli",
            email: "andreyvanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
        {
            id: 6,
            user: "Andrey Tendean",
            email: "andreyvanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
        {
            id: 7,
            user: "Andrey Wangania",
            email: "andreyvanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
        {
            id: 8,
            user: "Andrey Vanisa",
            email: "andreyvanini@gmail.com",
            telepon: '087657423123',
            status: "Approved",
        },
        {
            id: 9,
            user: "Andrey Mandak",
            email: "andreyvanini@gmail.com",
            telepon: '087657423123',
            status: "Pending",
        },
]