import Notiflix from 'notiflix';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operetions';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        // console.log('awawdawd');
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // console.log('awawdawd');
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        // console.log('awawdawd');
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// addContact(state, action) {
//       for (const contact of state.numbers) {
//         if (action.payload.name.toLowerCase() === contact.name.toLowerCase()) {
//           return Notiflix.Notify.failure(
//             `${action.payload.name} is already in contact`
//           );
//         } else if (
//           action.payload.number.toLowerCase() === contact.number.toLowerCase()
//         ) {
//           return Notiflix.Notify.failure(
//             `${action.payload.number} is already in contact`
//           );
//         }
//       }

//       state.numbers.push({ ...action.payload, id: nanoid() });
//     },
//     deleteContact(state, action) {
//       const index = state.numbers.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.numbers.splice(index, 1);
//       Notiflix.Notify.success(`Contact deleted successfully`);
//     },
