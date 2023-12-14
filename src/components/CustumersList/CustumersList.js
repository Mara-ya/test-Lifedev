export const CustomersList = ({currentItems}) => {

    return (
        <>
            {currentItems !== 0 && 
            currentItems.map(({ name, company, phone, email, country, status }, index) => {
                return(
                    <tr key = {index}>
                        <td>{name}</td>
                        <td>{company}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{country}</td>
                        <td>
                            <span className={`customer-status ${status.toLowerCase()}`}>
                                {status}
                            </span>
                        </td>
                    </tr>
                )
            })
            }
        </>
    )
}