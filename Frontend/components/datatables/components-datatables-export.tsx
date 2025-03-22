'use client';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import IconFile from '@/components/icon/icon-file';
import IconPrinter from '@/components/icon/icon-printer';

const rowData = [

    {
        id: 1,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 2,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 3,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 4,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Eligible',
    },
    {
        id: 5,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 6,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Eligible',
    },
    {
        id: 7,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 8,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 9,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Eligible',
    },
    {
        id: 10,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },
    {
        id: 11,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Eligible',
    },
    {
        id: 12,
        trialName: 'Canine Joint Health Study',
        objectives: 'DIDLA Limited',
        scope: 'Assess the supplement’s impact on joint flexibility, pain levels, and overall mobility over a 6-month period.',
        species: '2025-05-01',
        // address: {
        //     street: '688 Bulwer Place',
        //     city: 'Harmon',
        //     zipcode: 7664,
        //     geo: {
        //         lat: -12.762766,
        //         lng: -39.924497,
        //     },
        // },
        contact: '+1 (962) 537-2981',
        isActive: true,
        duration: 8 ,
        trialLocation: 'Not Eligible',
    },

];

const col = ['id', 'trialName', 'objectives', 'trialLocation', 'duration', 'species', 'scope', 'contact'];

const ComponentsDatatablesExport = () => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item: any) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.trialName.toLowerCase().includes(search.toLowerCase()) ||
                    item.objectives.toLowerCase().includes(search.toLowerCase()) ||
                    item.trialLocation.toLowerCase().includes(search.toLowerCase()) ||
                    item.scope.toLowerCase().includes(search.toLowerCase()) ||
                    item.duration.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.species.toLowerCase().includes(search.toLowerCase()) ||
                    item.contact.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
    }, [sortStatus]);

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = rowData;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: any) => {
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';
            records.map((item: any) => {
                rowhtml += '<tr>';
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: any) => {
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
    return (
        <div className="panel mt-6">
            <div className="mb-4.5 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div className="flex flex-wrap items-center">
                    <button type="button" onClick={() => exportTable('csv')} className="btn btn-secondary btn-md m-1 ">
                                                Investigator Registration
                    </button>
                 
                </div>

           </div>
            <div className="mb-4.5 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div className="flex flex-wrap items-center">
                    <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                        <IconFile className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                        CSV
                    </button>
                    <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                        <IconFile className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                        TXT
                    </button>

                    <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                        <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                        PRINT
                    </button>
                </div>

                <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={recordsData}
                    columns={[
                        { accessor: 'id', title: 'No', sortable: true },
                        { accessor: 'trialName',  title: 'Trial Name',sortable: true },
                        { accessor: 'objectives',  title: 'Investigator Company Name',sortable: true },
                        { accessor: 'trialLocation', title: 'Eligibility', sortable: true },
                        { accessor: 'duration', title: 'Duration In Months', sortable: true },
                        {
                            accessor: 'species',
                            title: 'Start Date',
                            sortable: true,
                            render: ({ species }) => <div>{formatDate(species)}</div>,
                        },
                        { accessor: 'scope', sortable: true },
                        { accessor: 'contact', sortable: true },
                    ]}
                    totalRecords={initialRecords.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default ComponentsDatatablesExport;
