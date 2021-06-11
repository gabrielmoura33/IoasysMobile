import React, { useEffect, useState } from 'react';
import { Header, ExitButton, Logo, Wrapper, Form, Container, Title, Count, EnterpriseList, InfoWrapper } from './styles';
import logoSrc from '../../assets/logo.png';
import {  FontAwesome5 } from '@expo/vector-icons';
import Input from '../../components/Form/Search';
import Card from '../../components/Card';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { ActivityIndicator } from 'react-native';


function Dashboard() {
  const [items, setItems] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useState<any>({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const {signOut} = useAuth();
  const handleSignOut = () => {
    signOut()
  }

  function handleSearch() {
    
    setSearchParams({
      name: search
    });
    fetchEnterprises();
  }

  async function fetchEnterprises() {
    try {
      setLoading(true);
      const response = await api.get('/enterprises', {
        params: { ...searchParams }
      });
      const {enterprises} = response.data;
      setItems(enterprises)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEnterprises();
  }, [])

  if(loading) {
    return (
      <Wrapper
      colors={['#721EA8','#CE2138']}      
      style={{alignItems: 'center', justifyContent: 'center'}}
    >
      <ActivityIndicator size="large" color="#FFF" />
    </Wrapper>
    )
  }
  return (
    <Wrapper
      colors={['#721EA8','#CE2138']}      
    >
      <Header>
        <Logo source={logoSrc}/>
        <ExitButton onPress={handleSignOut}>
          <FontAwesome5 name="power-off" size={32} color="white" />
        </ExitButton>
      </Header>
      <Form >
        <Input 
          placeholder="Busque uma empresa..."
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </Form>
      <Container>
        <InfoWrapper>
          <Title>Empresas</Title>
          <Count>{items.length} Empresas</Count>
        </InfoWrapper>
        <EnterpriseList 
          data={items}
          renderItem={({item}: any) => <Card photo={item.photo} description={item.description} enterprise_name={item.enterprise_name}  />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          keyExtractor={(item: any) => item.id}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
        />
      </Container>      
    </Wrapper>
  );
};

export default Dashboard;
