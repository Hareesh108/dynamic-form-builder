import SchemaEditor from 'src/components/dynamic-form/schema-editor';
import { Container, Typography } from '@mui/material';

export default function Page() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Dashboard — Form Builder Demo
      </Typography>

      <SchemaEditor />
    </Container>
  );
}
