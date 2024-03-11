import React, {useState} from 'react';

const Form = () => {
    //buat state untuk nyimpan datanya
    const [formData, setFormData] = useState({
        npm: '',
        firstname:'',
        middlename:'',
        lastname:'',
        birthdate:'',
    });
    
    const [tahunSekarang] = useState(new Date().getFullYear());
    const [age, setAge] = useState('');

        // const handleInputChange = (e) => {
        //     setTahunLahir(e.target.value);
            
        // }

    const [submitData, setSubmitData] = useState(null);

    //agar input berubah
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //agar halaman tidak reload
        const tahunLahir = new Date(formData.birthdate).getFullYear(); //ambil tahun dari form birthdate
        const usiaSekarang = tahunSekarang - tahunLahir;
        setAge(usiaSekarang); //output hasil perhitungan tahun
        setSubmitData(formData); //simpan data form untuk ditampilkan

    };

    // const jumlahUsia = () => {
    //     const usiaSekarang = tahunSekarang - tahunLahir;
    //         setAge(usiaSekarang);
    // }

    return (
        <div>
            <h1 className='mx-5'>Form Data Diri</h1>
            <form className='mx-5' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='npm' className='form-label'>NPM</label><br/>
                    <input type='number' maxLength="10" className='form-control' id='npm' value={formData.npm} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='firstname' className='form-label'>Firstname</label><br/>
                    <input type='text' required className='form-control' id='firstname' value={formData.firstname} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='middlename' className='form-label'>Middlename</label><br/>
                    <input type='text' className='form-control' id='middlename' value={formData.middlename} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='lastname' className='form-label'>Lastname</label><br/>
                    <input type='text' required className='form-control' id='lastname' value={formData.lastname} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='birthdate' className='form-label'>Birthdate</label><br/>
                    <input type='date' className='form-control' id='birthdate' value={formData.birthdate} onChange={handleChange}/>
                </div> 
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form> <br />
            
            {submitData && (
                <div className='mx-5'>
                    <p>NPM : {submitData.npm}</p>
                    <p>FirstName : {submitData.firstname}</p>
                    <p>Middlename : {submitData.middlename}</p>
                    <p>Lastname : {submitData.lastname}</p>
                    <p>Umur : {age} th</p>
                </div>
            )}

        </div>
    );
}

export default Form;
