import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {Link} from 'react-router-dom';


function Footer() {
  const [data, setData] = React.useState({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };
  return (
    <div className='footer-section'>
      <div className='footer_backdrop'></div>
      <div style={{position:'relative'}} className='footer_three_sections'>
        <div className='footer_one'>
          <div className='footer_title'>
          <h3>cannabis.</h3><h4>01ninjas.com</h4>
          </div>
          <div>
            <IconButton><FacebookIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><InstagramIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><TwitterIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><YouTubeIcon style={{color:'#F0F4F8'}}/></IconButton>
            </div>
        </div>
        <div className='footer_two'>
          <div className='footer_two_group'>
            <div className='footer_resource'>
              <h5>Resources</h5>
              <ul>
                <Link to='/'><li>Home</li></Link>
               
              <Link to='/all-products'><li>All products</li></Link>
                

                <li>Faq</li>
              
              </ul>
              </div>
              <div className='footer_contact'>
                <h5>Contact</h5>
                <ul>
                  <li>(201)328-7539</li>
                  <li>shanonmcdonald@01ninjas.com</li>
                
                </ul>
              </div>
          </div>
        </div>
        <div className='footer_three'>
        
<div className='footer_special'>
<form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            '--FormLabel-color': theme.vars.palette.primary.plainColor,
          })}
        >
         product newsletter
        </FormLabel>
        <Input
          sx={{ '--Input-decorator-childHeight': '45px' }}
          placeholder="email@email.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
             
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 ,  backgroundColor:"#1D0EBE"}}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: '#102A43' })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
    </div>
            </div>
      </div>
      </div>
  )
}

export default Footer