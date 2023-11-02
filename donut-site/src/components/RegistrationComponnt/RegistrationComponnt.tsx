import './RegistrationComponnt.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface FormData {
    email: string;
    password: string;
}

function RegistrationComponnt() {
    const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return ( 
        <main className="reg-main">
            <section className="registration">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-group'>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: 'Поле "Email" обязательно для заполнения',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Некорректный адрес электронной почты',
                                },
                            }}
                            render={({ field }) => (
                                <input type="text" id="email" placeholder="Email" {...field} />
                            )}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className='input-group'>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: 'Поле "Пароль" обязательно для заполнения',
                                minLength: {
                                    value: 6,
                                    message: 'Пароль должен содержать минимум 6 символов',
                                },
                            }}
                            render={({ field }) => (
                                <input type="password" id="password" placeholder="Password" {...field} />
                            )}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    
                    <button type="submit">Отправить</button>
                </form>
            </section>
        </main>
    );
}

export default RegistrationComponnt;