module.exports = () => ({
  card: {
    marginRight: '17px'
  },
  media: {},
  title: {
    textAlign: 'center',
    fontSize: '27px',
    letterSpacing: 0,
    color: '#73bb86'
  },
  itemTitle: {
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: 0,
    color: '#393939'
  },
  selectBox: {
    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#5d7bb0',
    alignSelf: 'flex-end',
    '&$:focus': {
      background: 'rgba(0, 0, 0, 1)'
    }
  },
  focus: {
    background: 'rgba(0, 0, 0, 1)'
  },
  radioControlLable: {
    color: '#393939'
  },
  radioLable: {
    borderBottom: '1px solid #e0e0e0'
    // margin:0
  },
  closePopUp: {
    position: 'absolute',
    right: '10px',
    top: '20px',
    color: '#303030',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    background: 'transparent',
    boxShadow: 'none'
  }
});
