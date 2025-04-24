import React from 'react'

const Travels = ({ styledDivs, handleSubmit, formData, setFormData, existingKey }) => {
  const styledInputs = 'border-2 border-[#D8B5C9] border-solid p-[2px] mt-1 h-full'
  const styledFieldsets = 'flex flex-col min-w-[250px] pt-[10px] flex-1'
  const styledDivsChilds = 'flex flex-wrap gap-4 md:justify-between'
  const styledH3 = 'font-medium'
  const { travelName, travelReason,  travelDepartureDate, travelReturnDate, travelDestination, travelDeparturePlace} = formData.general
  const { travelHotelName, travelHotelDirection, travelHotelPhone, travelCheckIn, travelCheckOut, travelHotelRoomType} = formData.accommodation
  const { travelCost, travelBills, travelPaymentMethod} = formData.cash

  return (
    <div className={styledDivs}>
      <h2 className='pl-3 py-3 font-bold text-[20px] md:text-2xl z-[999]'>
        {!existingKey ?  <>Agregar <span className='text-[#9487F5]'>nuevo</span> viaje</> : <>Editar viaje</>}
      </h2>
      <form className='mx-3' onSubmit={handleSubmit}>
        <div className='pt-4'>
          <h3 className={styledH3}>Información general</h3>
          <div className={styledDivsChilds}>
            <fieldset className={styledFieldsets}>
              <label>Nombre del viaje*</label>
              <input required={true} className={styledInputs} type='text' placeholder='Introduce nombre del viaje' value={travelName} onChange={(e) => setFormData({...formData, general: {...formData.general, travelName: e.target.value}})}/>
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Motivo del viaje*</label>
              <select required={true} className={styledInputs} value={travelReason} onChange={(e) => setFormData({...formData, general: {...formData.general, travelReason: e.target.value}})}>
                <option disabled={true} value="">Selecciona un motivo</option>
                <option value='negocios'>Negocios</option>
                <option value='ocio'>Ocio</option>
                <option value='vacaciones'>Vacaciones</option>
                <option value='familiar'>Familiar</option>
                <option value='otros'>Otros</option>
              </select>
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Fecha de salida*</label>
              <input required={true} className={styledInputs} type='date' value={travelDepartureDate} onChange={(e) => setFormData({...formData, general: {...formData.general, travelDepartureDate: e.target.value}})} />
            </fieldset>
          </div>

          <div className={styledDivsChilds}>
            <fieldset className={styledFieldsets}>
              <label>Fecha de regreso*</label>
              <input required={true} className={styledInputs} type='date' value={travelReturnDate} onChange={(e) => setFormData({...formData, general: {...formData.general, travelReturnDate: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Destino*</label>
              <input required={true} className={styledInputs} type='text' placeholder='Introduce el destino' value={travelDestination} onChange={(e) => setFormData({...formData, general: {...formData.general, travelDestination: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Lugar de salida</label>
              <input className={styledInputs} type='text' placeholder='Introduce el lugar de salida' value={travelDeparturePlace} onChange={(e) => setFormData({...formData, general: {...formData.general, travelDeparturePlace: e.target.value}})} />
            </fieldset>
          </div>
        </div>
        <div className='pt-4'>
          <h3 className={styledH3}>Alojamiento</h3>
          <div className={styledDivsChilds}>
            <fieldset className={styledFieldsets}>
              <label>Nombre del hotel / alojamiento*</label>
              <input required={true} className={styledInputs} type='text' placeholder='Introduce el nombre del alojamiento' value={travelHotelName} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelHotelName: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Dirección</label>
              <input className={styledInputs} type='text' placeholder='Introduce la dirección' value={travelHotelDirection} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelHotelDirection: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Teléfono de contacto*</label>
              <input pattern="[0-9]{9}" required={true} className={styledInputs} type='tel' placeholder='Introduce el número de contacto' value={travelHotelPhone} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelHotelPhone: e.target.value}})} />
            </fieldset>
          </div>

          <div className={styledDivsChilds}>
            <fieldset className={styledFieldsets}>
              <label>Fecha de check-in*</label>
              <input required={true} className={styledInputs} type='date' value={travelCheckIn} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelCheckIn: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Fecha de check-out*</label>
              <input required={true} className={styledInputs} type='date' value={travelCheckOut} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelCheckOut: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Tipo de habitación</label>
              <select className={styledInputs} value={travelHotelRoomType} onChange={(e) => setFormData({...formData, accommodation: {...formData.accommodation, travelHotelRoomType: e.target.value}})}>
                <option disabled={true} value="">Selecciona el tipo de habitación</option>
                <option value='deluxe'>Deluxe</option>
                <option value='estandar'>Estándar</option>
                <option value='suite'>Suite</option>
                <option value='otro'>Otro</option>
              </select>
            </fieldset>
          </div>
        </div>
        <div className='pt-4'>
          <h3 className={styledH3}>Presupuesto / Costos</h3>
          <div className={styledDivsChilds}>
            <fieldset className={styledFieldsets}>
              <label>Costo estimado del viaje*</label>
              <input required={true} className={styledInputs} type='number' placeholder='Introduce el costo estimado' value={travelCost} onChange={(e) => setFormData({...formData, cash: {...formData.cash, travelCost: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Gastos anticipados*</label>
              <input required={true} className={styledInputs} type='number' placeholder='Introduce el gasto estimado' value={travelBills} onChange={(e) => setFormData({...formData, cash: {...formData.cash, travelBills: e.target.value}})} />
            </fieldset>
            <fieldset className={styledFieldsets}>
              <label>Método de pago</label>
              <select className={styledInputs} value={travelPaymentMethod} onChange={(e) => setFormData({...formData, cash: {...formData.cash, travelPaymentMethod: e.target.value}})}>
                <option disabled={true} value="">Selecciona el método de pago</option>
                <option value='tarjeta'>Tarjeta de crédito</option>
                <option value='transferencia'>Transferencia bancaria</option>
                <option value='efectivo'>Efectivo</option>
                <option value='bizum'>Bizum</option>
                <option value='otro'>Otro</option>
              </select>
            </fieldset>
          </div>

          <div className='flex flex-col pt-4'>
            <fieldset className='flex flex-col'>
              <label>¿Requiere reembolso?</label>
              <div className='flex gap-4 mt-1'>
                <label><input type='radio' name='reembolso' value='si' checked={formData.cash.travelRefund === "si"} onChange={(e) => setFormData({...formData, cash: {...formData.cash, travelRefund: e.target.value}})} /> Sí</label>
                <label><input type='radio' name='reembolso' value='no' checked={formData.cash.travelRefund === "no"} onChange={(e) => setFormData({...formData, cash: {...formData.cash, travelRefund: e.target.value}})}/> No</label>
              </div>
            </fieldset>

            <fieldset className='flex flex-col pt-[10px]'>
              <label>Notas adicionales</label>
              <textarea className={styledInputs} placeholder='Escribe tus notas adicionales sobre el viaje' value={formData.travelAdditionalNotes} onChange={(e) => setFormData({...formData, travelAdditionalNotes: e.target.value})}></textarea>
            </fieldset>
          </div>
        </div>

        <div className='flex justify-end mt-4'>
          <input type='submit' value={existingKey ? 'Editar': 'Agregar'} className='px-4 py-2 bg-[#9487F5] text-white font-semibold rounded-[10px] cursor-pointer transition-all hover:bg-[#7b6de3]' />
        </div>

      </form>
    </div>
  )
}

export default Travels
