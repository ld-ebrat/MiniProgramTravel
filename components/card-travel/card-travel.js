Component({
  mixins: [],
  data: {
    visibilityModal:false,
  },
  props: {
    src:"",
    nameDestino:"",
    description:"",
    estado:"",
    data_id:"",
    onHandleVisibilityModal:()=>{},
    onHandleDeleteDestino: ()=>{},
    onHandleUpdateDestino:()=>{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    openModal(e){
      this.props.onHandleVisibilityModal(e)
    },
    deleteDestino(e){
      this.props.onHandleDeleteDestino(this.props.data_id)
    },
    updateDestino(){
      this.props.onHandleUpdateDestino(this.props.data_id)
    }
  },
});
